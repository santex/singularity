#!/usr/bin/perl -X
use Cache::Memcached::Fast;

         our $memd = new Cache::Memcached::Fast({
             servers => [ { address => 'localhost:11211', weight => 2.5 }],
             namespace => 'my:',
             connect_timeout => 0.2,
             io_timeout => 0.1,
             close_on_error => 1,
             compress_threshold => 100_000,
             compress_ratio => 0.9,
             max_failures => 1,
             max_size => 512 * 1024,
         });



package AI::MicroStructure::Object;
use Data::Printer;
use strict;
use Digest::MD5 qw(md5_hex);
sub new {
  my $pkg = shift;
  my $check = pop;
  my $self = bless {}, $pkg;
  $self->{name} = shift @_;
  $self->{md5} = md5_hex(@_);
  my $i = 0;

  
  

  #foreach( @_){
  #`micro new $_ verbose`;
   #$self->{$self->{name}}->{$_} = 1 for split(/\n/,`micro $_ all`)
   #$self->{$self->{name}}->{$_} = $_ for grep{$_=~/^[a-z]{3}/}split(/ |_|\t|\n|,|~/,`micro $self->{name} 3;`);
   #$self->{$self->{name}}->{$_} = 1 for grep{$_=~/^[a-z]{3}/}split(/ |_|\t|\n|,|~/,`micro $self->{name} 3;`);

  #}
  
  #my @keys = values %{$self->{$self->{name}};
  
#  p $self;


  return $self;
}



sub name {

    my $self = shift;
    return $self->{name};
}
1;

package AI::MicroStructure::ObjectSet;
use strict;

sub new {
  my $pkg = shift;
  my $self = bless {}, $pkg;
  $self->insert(@_) if @_;
  return $self;
}

sub members {
  return values %{$_[0]};
}

sub size {
  return scalar keys %{$_[0]};
}

sub insert {
  my $self = shift;
  foreach my $element (@_) {
#    warn "types are ", @_;
    $self->{ $element->name } = $element;
  }
}

sub retrieve { $_[0]->{$_[1]} }
sub includes { exists $_[0]->{ $_[1]->name } }
sub includes_name  { exists $_[0]->{ $_[1] } }

1;
package main;
use Data::Printer;
use AI::MicroStructure;
use GraphViz::No;
use GraphViz::Small;
use  GraphViz::Data::Grapher;


sub check {
 my $name = shift;
 my $prog = shift;
    

  if(defined(my $ret = $memd->get(sprintf("%s_%s",$name,$prog)))){
    return $ret;
  }else{
    my $ret = AI::MicroStructure::Object->new($name,1);
     $memd->set(sprintf("%s_%s",$name,$prog),$ret);
     return $ret;
  }
}




#my $graph = GraphViz::Small->new(ayout => 'twopi',overlap=>"false");
my $graph = GraphViz::Small->new( layout => 'twopi',directed => 1,width => 35, height => 35);
#my $graph = GraphViz::No->new(layout => 'twopi',directed => 0,width => 60, height => 60);

our $micro = AI::MicroStructure->new();
our @t = $micro->structures;
    @t =  @ARGV unless(!@ARGV);
my $set = AI::MicroStructure::ObjectSet->new();

my @default_attrs = (
                     fontsize => '25',
                     fillcolor=>'red',
                     color=>"red"
                    );


  foreach my $ARG (@ARGV){
  @t = split("\n",`micro all $ARG;`);

  $graph->add_node($ARG, label =>$ARG);
  

foreach my $e(@t){
  
  $graph->add_node($e, label => $e);
  

  $graph->add_edge($e => $ARG, label => $e,@default_attrs);
  #my $ob = check($e,"object");
     foreach(split("\n",`micro all $e | egrep -i $ARG`)){

      $graph->add_node($_ ,label =>$_,@default_attrs);
     #$graph->add_edge($_,$_,@default_attrs);
     $graph->add_edge($_ => $e);
    }
  }

}
  $graph->as_png(sprintf("./%s_knowladge-reaktor.png",@ARGV));
  $graph->as_dot(sprintf("./%s_knowladge-reaktor.dot",@ARGV));

p $set;



__DATA__




  foreach my $e(@t){


  my $ob = check($e,"object");
      $graph->add_node($e ,@default_attrs);
      #$graph->add_edge($e,label=>$e,@default_attrs);
      $set->insert($ob);
     foreach(values %{$ob->{$ob->{name}}}){
      #$graph->add_node($_ );# &&
      if($_!=1){
       $graph->add_node($_ );
       $graph->add_edge($e => $_,label=>$_,@default_attrs);
     }else{
        $graph->add_node($_,label=>$_ ,@default_attrs);
        $graph->add_edge($e => $_,@default_attrs);

       }
     }
  }


  
  $graph->as_png(sprintf("./%s_%s_knowladge-reaktor.png",time,@ARGV));
  $graph->as_dot(sprintf("./%s_%s_knowladge-reaktor.dot",time,@ARGV));

p $set;

