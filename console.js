
    (function () {

        var logger = document.createElement('div');
        logger.setAttribute('style','display: block; font-family: courier, monospace; font-size: 0.75rem; color: #AAAAAA; height: 100px; overflow: scroll;');

        var handle = document.createElement('div');
        handle.setAttribute('style','position:absolute; bottom:0; left: 50%; margin-left: -50px; width: 100px; height: 30px; background-color: #DDDDDD; margin-bottom: -30px; border-radius: 0 0 10px 10px;');

        var wrapper = document.createElement('div');
        wrapper.setAttribute('style','position:relative; top:0; left: 0; right: 0; height: 100px; background-color: #888; margin-top: -100px');

        wrapper.appendChild(logger);
        wrapper.appendChild(handle);

        document.body.appendChild(wrapper);

        console.log   = function() { console.logToHTML('log', arguments); }
        console.info  = function() { console.logToHTML('info', arguments); }
        console.error = function() { console.logToHTML('error', arguments); }
        console.warn  = function() { console.logToHTML('warn', arguments); }

        console.logToHTML = function (type, arguments) {
            if (!arguments) return;
            switch (type) {
                case "log":   console.writeToLog('<span style="color: #44BB44">'+type+'</span>:'); break;
                case "info":  console.writeToLog('<span style="color: blue">'+type+'</span>:');    break;
                case "error": console.writeToLog('<span style="color: red">'+type+'</span>:');     break;
                case "warn":  console.writeToLog('<span style="color: orange">'+type+'</span>:');  break;
            }
            for (var message in arguments) {  
                console.writeToLog(arguments[message]);
            }
            console.writeToLog('<br />');
            //console.oldlog(arguments);
        }

        console.writeToLog = function(message) {
          logger.innerHTML += message+' ';
        }

        handle.addEventListener('click', function(){
            if (wrapper.style.marginTop === "-100px") {
                wrapper.style.marginTop = "0px";
            } else {
                wrapper.style.marginTop = "-100px";
            }
        });

    })();
