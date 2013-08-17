// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function(){

    var $window = $(window)

  // let's invite Firefox to the party.
  if (window.MozWebSocket) {
    window.WebSocket = window.MozWebSocket;
  }

  function micrownet(o){
    var s = '';
    var i = 0;
    for(var a in o){
      if (typeof o[a] == 'object'){
        if(o[a].length!=0){ 
          s+=micrownet(o[a]);
        }

      }else{
        if(i==0){ $("#micrownet").empty().html('<li class="active"><a href="#">Micro</a></li>'); }
        if(i<=10)
        {
          o[a] = o[a].replace(/^.*.[0-9]*:/g, "");
        
          if(o[a].length <= 14)
          {
            $("#micrownet").append("<li><a href='#"+$.trim(o[a])+"'><small>"+$.trim(o[a])+"</small></a></li>");
            i++;
          }
        }
      }//end if
    }//end for
    return s;
  }//end function

  function relations(o){
    var s = '';
    var i = 0;
    for(var a in o){
      if (typeof o[a] == 'object'){
        if(o[a].length!=0){ 
          s+=relations(o[a]);
        }

      }else{
        if(i==0){ $("#relation").empty().html('<li class="active"><a href="#">Relation</a></li>'); }
        if(i<=10)
        {
          o[a] = o[a].replace(/^.*.[0-9]*:/g, "");
        
          if(o[a].length <= 14)
          {
            $("#relation").append("<li><a href='#"+$.trim(o[a])+"'><small>"+$.trim(o[a])+"</small></a></li>");
            i++;
          }
        }
      }//end if
    }//end for
    return s;
  }//end function

  function news(o){
    var i = 0;
    var s = '';
    for(var a in o){
      if (typeof o[a] == 'object'){
        if(o[a].length!=0){
          
        
          s+=news(o[a]);
        
        }

      }else{

        
        $("#tab-news").append('<div class="alert alert-info"><strong style="margin:20px;">'+i+'&nbsp;</strong>'+o[a]+'</div>');
        i++;
        
      }//end if
    }//end for
    return s;
  }//end function
  function google(o){
    var s = '';
    var i = 0;
    for(var a in o){
      if (typeof o[a] == 'object'){
        if(o[a].length!=0){ 
          s+=google(o[a]);
        }

      }else{
        
        if(i==0){ $("#google").empty().html('<li class="active"><a href="#">Google</a></li>'); }
        

        if(i<=10)
        {
          if(o[a].match(/http/)){
            o[a] = o[a].replace(/\/url\?q[=](http|https):\/\//g, "");
            o[a] = o[a].replace(/&.*/g, "");
            o[a] = o[a].replace(/www./g, "");
            if(o[a].length <= 28){
              $("#google").append("<li><a target='_blank' href='"+$.trim(o[a])+"'><small>"+$.trim(o[a])+"</small></a></li>");
              i++;
            }else{
              $("#google").append("<li><a target='_blank' href='"+$.trim(o[a])+"'><small>"+$.trim(o[a]).substring(0,28)+"...</small></a></li>");
              i++;
            
            }
          }
        }//end if
      }
    }//end for
    return s;
  }//end function


  function duck(o){
    var s = '';
    var i = 0;
    for(var a in o){
      if (typeof o[a] == 'object'){
        if(o[a].length!=0){ 
          s+=duck(o[a]);
        }

      }else{
        if(i==0){ $("#duck").empty().html('<li class="active"><a href="#">DuckDuckGo</a></li>'); }
        if(i<=10)
        {
          if(o[a].match(/http/)){
            o[a] = o[a].replace(/http:\/\/duckduckgo.com\//g, "");
          
            if(o[a].length <= 28){
              $("#duck").append("<li><a target='_blank' href='http://duckduckgo.com/"+$.trim(o[a])+"'><small>"+$.trim(o[a])+"</small></a></li>");
              i++;
            }else{
              $("#duck").append("<li><a target='_blank' href='http://duckduckgo.com/"+$.trim(o[a])+"'><small>"+$.trim(o[a]).substring(0,28)+"...</small></a></li>");
              i++;
            
            }
          }
        }
      }//end if
    }//end for
    return s;
  }//end function
  function lists(o){
      var s = '';
      var i = 0;
      for(var a in o){
        if (typeof o[a] == 'object'){
          if(o[a].length!=0){ 
            s+=lists(o[a]);
          }

        }else{
          if(i==0){ $("#lists").empty().html('<li class="active"><a href="#">Lists</a></li>'); }
          if(i<=10)
          {
            if(o[a].length <= 28)
            {
              $("#lists").append("<li><a target='_blank' href='#"+$.trim(o[a])+"'><small>"+$.trim(o[a])+"</small></a></li>");
              i++;
            }else
            {
              var show = o[a].replace("List_of_","");
              $("#lists").append("<li><a target='_blank' href='#"+$.trim(o[a])+"'><small>"+$.trim(show).substring(0,28)+"...</small></a></li>");
              i++;
            
            }
          }
        }//end if
      }//end for
      return s;
    }//end function

  function cats(o){
      var s = '';
      var i = 0;
      for(var a in o){
        if (typeof o[a] == 'object'){
          if(o[a].length!=0){ 
            s+=cats(o[a]);
          }

        }else{
          if(i==0){ $("#cat").empty().html('<li class="active"><a href="#">Categorys</a></li>'); }
          if(i<=10)
          {

            var show = o[a].replace("|","");
            if(o[a].length <= 28)
            {
              $("#cat").append("<li><a target='_blank' href='#"+$.trim(o[a])+"'><small>"+$.trim(show)+"</small></a></li>");
              i++;
            }else{
              
              $("#cat").append("<li><a target='_blank' href='#"+$.trim(o[a])+"'><small>"+$.trim(show).substring(0,28)+"</small></a></li>");
              i++;
            }
          }
        }//end if
      }//end for
      return s;
    }//end function


  function iterateAttributesAndFormHTMLLabels(o){
    var s = '';
    for(var a in o){
      if (typeof o[a] == 'object'){
        if(o[a].length!=0){


              switch (a) {
                case "google":
                  google(o[a]);
                break;
                case "duck":
                case "urls":
                //  duck(o[a]);
                break;
                case "micro":
                case "micrownet":
                  micrownet(o[a]);
                break;
                case "news":
                case "micro-www":
                case "wiki":
                case "micro-www-search":
                break;
                case "common":
                  news(o[a].milestones);                  
                break;
                case "image":
                   // s+='<hr /><h5>'+a+'</h5>';
                   // s+=iterateAttributesAndFormHTMLLabels(o[a]);
                break;
                case "Lists":
                  lists(o[a]);
                break;
                case "cat":
                  cats(o[a]);
                break;
                case "related":
                case "micro-relation":
                  relations(o[a]);
                break;
        
                default:
                  //s+='<hr /><h5>'+a+'</h5>';
                  s+=iterateAttributesAndFormHTMLLabels(o[a]);
                break;
              }


        }


      }else{
        //s+='<div class="well">'+o[a]+'</div>';
      }//end if
    }//end for
    return s;
  }//end function

  function openConnection() {
    // uses global 'conn' object
    if (conn.readyState === undefined || conn.readyState > 1) {
      conn = new WebSocket('ws://0.0.0.0:3000/search');
      conn.onopen = function () {
        state.className = 'success';
        state.innerHTML = 'Socket open';
      };
      conn.onmessage = function (event) {

        var message = JSON.parse(event.data);
          log.innerHTML =  iterateAttributesAndFormHTMLLabels(message);

      };
      conn.onclose = function (event) {
        state.className = 'fail';
        state.innerHTML = 'Socket closed';
      };
    }
  }

  var connected = document.getElementById('connected'),
      log = document.getElementById('log'),
      chat = document.getElementById('chat'),
      form = chat.form,
      conn = {},
      state = document.getElementById('status'),
      entities = {
        '<' : '&lt;',
        '>' : '&gt;',
        '&' : '&amp;'
      };
  if (window.WebSocket === undefined) {
    state.innerHTML = 'Sockets not supported';
    state.className = 'fail';
  } else {
    state.onclick = function () {
      if (conn.readyState !== 1) {
        conn.close();
        setTimeout(function () {
          openConnection();
        }, 250);
      }
    };
    window.addEventListener("submit",  function (event) {
      event.preventDefault();
      // if we're connected
      if (conn.readyState === 1) {
        $("#cat").empty();
        $("#lists").empty();
        $("#relation").empty();//.html('<li class="active"><a href="#">Relations</a></li>');
        $("#duck").empty();//.html('<li class="active"><a href="#">DuckDuckGo</a></li>');
        $("#google").empty();//.html('<li class="active"><a href="#">Google</a></li>');
        $("#tab-news").empty();//.html('<li class="active"><a href="#">News</a></li>');
        $("#micrownet").empty();//.html('<li class="active"><a href="#">News</a></li>');

      var sendObj = {
        type: 'query',
        user: 'santex',
        message:chat.value
      };

        console.log('send!', JSON.stringify(sendObj));
        conn.send(JSON.stringify(sendObj));


        log.innerHTML = '<li class="you">' + chat.value + '</li>' + log.innerHTML;

      }
    });
    openConnection();
  }



})

}(window.jQuery)



