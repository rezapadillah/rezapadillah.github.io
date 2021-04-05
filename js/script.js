/*Code By : https://codepen.io/simoami/pen/zstvo*/

$(function() {
  var data = [
  { 
    action: 'type',
    strings: ["whoami"],
    output: '<span class="gray">root@nulled</span><br>&nbsp;',
    postDelay: 1500
  },
  { 
    action: 'type',
    strings: ["ls -la"],
    output: '<span class="gray">secret &nbsp;&nbsp; <i class="fa fa-heart"></i> Feryn <i class="fa fa-heart"></i></span><br>&nbsp;',
    postDelay: 1500
  },
  { 
    action: 'type',
    strings: ["cd secret^400"],
    output: ' ',
    postDelay: 1500
  },
   { 
    action: 'type',
    strings: ["ls"],
    output: '<span class="gray">data.txt</span><br>&nbsp;',
    postDelay: 1500
  },
  { 
    action: 'type',
    clear: true,
    strings: ['cat data.txt^400'],
    output: $('.mimik-run-output').html()
  },
  { 
    action: 'type',
    strings: ["Let's Work And Collaboration : reza@kaltimprov.go.id"],
    postDelay: 2000
  }
  
];
  runScripts(data, 0);
});

function runScripts(data, pos) {
    var prompt = $('.prompt'),
        script = data[pos];
    if(script.clear === true) {
      $('.history').html(''); 
    }
    switch(script.action) {
        case 'type':
          // cleanup for next execution
          prompt.removeData();
          $('.typed-cursor').text('');
          prompt.typed({
            strings: script.strings,
            typeSpeed: 30,
            callback: function() {
              var history = $('.history').html();
              history = history ? [history] : [];
              history.push('$ ' + prompt.text());
              if(script.output) {
                history.push(script.output);
                prompt.html('');
                $('.history').html(history.join('<br>'));
              }
              // scroll to bottom of screen
              $('section.terminal').scrollTop($('section.terminal').height());
              // Run next script
              pos++;
              if(pos < data.length) {
                setTimeout(function() {
                  runScripts(data, pos);
                }, script.postDelay || 1000);
              }
            }
          });
          break;
        case 'view':

          break;
    }
}
