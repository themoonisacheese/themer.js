var fs = require('fs');
const VersionMajor = 1;
const VersionMinor = 3;

function prompt(question, callback) {
    var stdin = process.stdin,
stdout = process.stdout;

    stdin.resume();
    stdout.write(question);

    stdin.once('data', function (data) {
callback(data.toString().trim());
    });
}


var bg = new String();
var name = new String();
var css = new String();



//this is terrible and i hope i never have to do that again.
//TODO:kill myself

css = "//META{\"name\":\"";

console.log("Themer.js v" + VersionMajor + "." + VersionMinor);

prompt('Enter the theme name: ', function(input){
  name = input;
  css += input;
  css += "\",\"description\":\"Generated automatically using Themer.js\",\"author\":\"Themoonisacheese\",\"version\":\"1.0\"}*//\n\
\n\
{}\n\
\n\
/* Backgrounds */\n"

  prompt('Copy-Paste the URL to your background image (must be a direct link): ', function(input){
    bg = input;
    if(bg.charAt(4)===':'){//the link needs to be https or discord won't load it
            bg = 'https'.concat(bg.slice(4));
    }
css +=".app,\r\n\
.callout-backdrop {\r\n\
	background-image: url(\"" + bg + "\");\r\n\
	background-size: cover !important;\r\n\
	background-position: center !important;\r\n\
}\r\n\
\r\n\
.bda-backdrop {\r\n\
	background: url(\"" + bg + "\");\r\n\
	background-size: cover!important;\r\n\
}\r\n\
\r\n\
#pubs-container:before {\r\n\
	background: url(\"" + bg + "\")!important;\r\n\
	background-size: cover!important;\r\n\
}\r\n\
\r\n\
.layers,\r\n\
.layer,\r\n\
.search-header {\r\n\
	background: transparent !important;\r\n\
}\r\n\
\r\n\
.chat .new-messages-bar {\r\n\
	background-color: transparent !important;\r\n\
	opacity: 0.8;\r\n\
}\r\n\
\r\n\
.chat>.content .messages .message-group .markup pre {\r\n\
	background: transparent;\r\n\
	!important;\r\n\
	border-color: rgba(0, 0, 0, 0.46) !important;\r\n\
}\r\n\
\r\n\
.message-group .comment .markup code.inline {\r\n\
	background: transparent;\r\n\
}\r\n\
\r\n\
.message-group .comment .markup pre {\r\n\
	background: transparent;\r\n\
}\r\n\
\r\n\
.message-group .comment .markup pre code {\r\n\
	background: transparent;\r\n\
}\r\n\
\r\n\
.theme-dark .messages-wrapper .messages .message-group-blocked {\r\n\
	background: transparent;\r\n\
	border-color: transparent;\r\n\
}\r\n\
\r\n\
.ui-flex.flex-horizontal>.ui-flex:last-child {\r\n\
	background: transparent;\r\n\
}\r\n\
\r\n\
.search-popout .option.selected:after {\r\n\
	background: transparent !important;\r\n\
}\r\n\
\r\n\
\r\n\
/*THIS IS REALLY FUCKING IMPORTANT */\r\n\
\r\n\
.links,\r\n\
.chat,\r\n\
.typing,\r\n\
.guild-channels,\r\n\
.private-channels,\r\n\
.divider-red span,\r\n\
.messages-wrapper,\r\n\
#rtc-connection {\r\n\
	background: transparent !important;\r\n\
}\r\n\
\r\n\
.content {\r\n\
	background: rgba(0, 0, 0, 0.3) !important;\r\n\
}\r\n\
\r\n\
.container-RYiLUQ {\r\n\
	background: transparent !important;\r\n\
}\r\n\
\r\n\
.account {\r\n\
	background: rgba(0, 0, 0, 0);\r\n\
}\r\n\
\r\n\
#rtc-connection .btn {\r\n\
	background: transparent;\r\n\
}\r\n\
\r\n\
#rtc-connection .btn:active {\r\n\
	background: transparent;\r\n\
}\r\n\
\r\n\
#user-profile-modal .avatar-wrapper {\r\n\
	background-color: transparent;\r\n\
}\r\n\
\r\n\
#user-profile-modal .header:after {\r\n\
	background-color: transparent;\r\n\
	background-image: none;\r\n\
}\r\n\
\r\n\
.emoji-picker .sticky-header {\r\n\
	background: transparent;\r\n\
}\r\n\
\r\n\
.bda-dark .emoji-picker .header .search-bar {\r\n\
	background-color: transparent;\r\n\
}\r\n\
\r\n\
.instant-invite-modal {\r\n\
	background: transparent;\r\n\
}\r\n\
\r\n\
.add-friend-popout {\r\n\
	background: transparent;\r\n\
}\r\n\
\r\n\
.user-popout .avatar-wrapper .avatar-popout {\r\n\
	background-color: transparent;\r\n\
}\r\n\
\r\n\
.theme-dark.context-menu .item.danger {\r\n\
	background: transparent;\r\n\
}\r\n\
\r\n\
.context-menu .item.danger {\r\n\
	background-color: transparent;\r\n\
}\r\n\
\r\n\
.guild-settings-modal-members {\r\n\
	background-color: transparent;\r\n\
}\r\n\
\r\n\
.clipboard-input-inner {\r\n\
	background: transparent;\r\n\
}\r\n\
\r\n\
.create-guild-container {\r\n\
	background-color: transparent;\r\n\
}\r\n\
\r\n\
.theme-dark .ui-standard-sidebar-view .content-region {\r\n\
	background: transparent;\r\n\
}\r\n\
\r\n\
.form .control-group .Select-control {\r\n\
	background-color: transparent;\r\n\
}\r\n\
\r\n\
.user-settings-modal .settings-wrapper,\r\n\
.user-settings-modal .voice-settings.element {\r\n\
	background: transparent;\r\n\
}\r\n\
\r\n\
.user-settings-modal .voice-settings {\r\n\
	background: transparent !important;\r\n\
}\r\n\
\r\n\
.form .form-actions {\r\n\
	background: transparent;\r\n\
}\r\n\
\r\n\
#friends {\r\n\
	background: transparent !important;\r\n\
}\r\n\
\r\n\
.theme-dark .chat>.content .messages .divider:not(.red) div {\r\n\
	background: transparent;\r\n\
}\r\n\
\r\n\
.channel-notification-settings .content .content-inner {\r\n\
	background: transparent !important;\r\n\
}\r\n\
\r\n\
.theme-dark.context-menu .item.disabled {\r\n\
	background-color: rgba(0, 0, 0, 0);\r\n\
}\r\n\
\r\n\
.search-bar.search-bar-light {\r\n\
	background-color: rgba(0, 0, 0, 0);\r\n\
	box-shadow: none;\r\n\
}\r\n\
\r\n\
.region-select {\r\n\
	background-color: rgba(0, 0, 0, 0);\r\n\
}\r\n\
\r\n\
.user-popout .body .notes textarea:focus {\r\n\
	background: rgba(0, 0, 0, 0);\r\n\
}\r\n\
\r\n\
.bd-settings>div:last-child {\r\n\
	background: rgba(0, 0, 0, 0) !important;\r\n\
	height: 30px !important;\r\n\
	position: absolute !important;\r\n\
	bottom: 0px !important;\r\n\
	left: 0px !important;\r\n\
	right: 0 !important;\r\n\
}\r\n\
\r\n\
.guilds-wrapper {\r\n\
	box-shadow: inset -10px 0px 5px -6px rgba(0, 0, 0, 0.1);\r\n\
	background: rgba(0, 0, 0, 0.5);\r\n\
	border-right: 1px solid rgba(0, 0, 0, 0.2);\r\n\
}\r\n\
\r\n\
.account {\r\n\
	background: rgba(0, 0, 0, 0);\r\n\
}\r\n\
\r\n\
.channel-textarea-autocomplete-inner {\r\n\
	background: rgba(0, 0, 0, 0.6)!important;\r\n\
	border: none !important;\r\n\
}\r\n\
\r\n\
.channel.channel-textarea-autocomplete-inner:after {\r\n\
	display: none;\r\n\
}\r\n\
\r\n\
.channel-textarea-autocomplete-inner header {\r\n\
	background: rgba(0, 0, 0, 0.6)!important;\r\n\
	border-radius: 5px 5px 0 0;\r\n\
	border: none !important;\r\n\
}\r\n\
\r\n\
.channels-wrap {\r\n\
	background: rgba(0, 0, 0, 0.3);\r\n\
	box-shadow: inset -10px 0px 20px -10px rgba(0, 0, 0, 0.2);\r\n\
}\r\n\
\r\n\
.theme-dark .channel-pins-wrap {\r\n\
	background-color: rgba(0, 0, 0, 0.79);\r\n\
	box-shadow: none;\r\n\
}\r\n\
\r\n\
.theme-dark .channel-pins-wrap .header {\r\n\
	box-shadow: none;\r\n\
}\r\n\
\r\n\
.settings-connections-wrapper .authed-app {\r\n\
	background: rgba(0, 0, 0, 0.6);\r\n\
}\r\n\
\r\n\
.guilds-wrapper .guilds .friends-online {\r\n\
	font-size: 10px;\r\n\
	color: hsla(0, 0%, 100%, 0.82);\r\n\
	width: 51px;\r\n\
}\r\n\
\r\n\
.theme-dark .messages-wrapper .messages .message-group .comment .markup .highlight:hover {\r\n\
	background-color: rgba(0, 0, 0, 0);\r\n\
}\r\n\
\r\n\
.chat>.content .messages .message-group h2 .user-name {\r\n\
	color: rgba(255, 255, 255, 0.8);\r\n\
}\r\n\
\r\n\
.create-guild-container .create-or-join .actions .or {\r\n\
	display: none;\r\n\
}\r\n\
\r\n\
.create-guild-container {\r\n\
	background-color: transparent;\r\n\
}\r\n\
\r\n\
.channel-members {\r\n\
	background: rgba(0, 0, 0, 0.25) !important;\r\n\
}\r\n\
\r\n\
\r\n\
/* Scroller Settings */\r\n\
\r\n\
.scroller-wrap .scroller {\r\n\
	overflow-y: auto !important;\r\n\
}\r\n\
\r\n\
.scroller-wrap .scroller::-webkit-scrollbar-thumb,\r\n\
.scroller-wrap .scroller::-webkit-scrollbar-track-piece {\r\n\
	border: 3px solid rgba(49, 49, 49, 0) !important;\r\n\
}\r\n\
\r\n\
.scroller-wrap .scroller::-webkit-scrollbar-track-piece {\r\n\
	border: 3px solid rgba(255, 255, 255, 0) !important;\r\n\
	background-color: rgba(0, 0, 0, 0.3) !important;\r\n\
}\r\n\
\r\n\
.is-open.is-focused .Select-menu::-webkit-scrollbar,\r\n\
.is-open.is-focused .Select-menu::-webkit-scrollbar-track-piece {\r\n\
	background: rgba(0, 0, 0, 0.3);\r\n\
	width: 8px;\r\n\
}\r\n\
\r\n\
.is-open.is-focused .Select-menu::-webkit-scrollbar-thumb {\r\n\
	border-radius: 10px;\r\n\
}\r\n\
\r\n\
.CodeMirror> ::-webkit-scrollbar-thumb {\r\n\
	border-radius: 6px;\r\n\
}\r\n\
\r\n\
.CodeMirror> ::-webkit-scrollbar-track-piece {\r\n\
	border-radius: 6px;\r\n\
}\r\n\
\r\n\
.CodeMirror-hscrollbar::-webkit-scrollbar-thumb,\r\n\
.CodeMirror-hscrollbar::-webkit-scrollbar-track-piece {\r\n\
	border: 3px solid rgba(49 49 49, 0) !important;\r\n\
	border-radius: 6px;\r\n\
}\r\n\
\r\n\
.CodeMirror-hscrollbar::-webkit-scrollbar-track-piece {\r\n\
	border: 3px solid rgba(255, 255, 255, 0) !important;\r\n\
	background-color: rgba(0, 0, 0, 0.3) !important;\r\n\
}\r\n\
\r\n\
.user-popout .body .roles .member-roles::-webkit-scrollbar,\r\n\
.user-popout .body .roles .member-roles::-webkit-scrollbar-track,\r\n\
.user-popout .body .roles .member-roles::-webkit-scrollbar-track-piece {\r\n\
	background-color: rgba(15, 17, 19, 0.6) !important;\r\n\
	border-color: rgba(15, 17, 19, 0.6) !important;\r\n\
	width: 8px;\r\n\
}\r\n\
\r\n\
.user-popout .body .roles .member-roles::-webkit-scrollbar-thumb {\r\n\
	border-radius: 6px;\r\n\
}\r\n\
\r\n\
\r\n\
/* Custome CSS */\r\n\
\r\n\
.bda-slist li:nth-child(odd) {\r\n\
	background: rgba(0, 0, 0, 0.32);\r\n\
}\r\n\
\r\n\
.bda-slist li {\r\n\
	background: rgba(0, 0, 0, 0.32);\r\n\
}\r\n\
\r\n\
.bda-slist .bda-description {\r\n\
	color: #000000;\r\n\
}\r\n\
\r\n\
.bda-slist .checkbox:before {\r\n\
	content: \"Enable\";\r\n\
	color: #000000;\r\n\
}\r\n\
\r\n\
\r\n\
/* Friends */\r\n\
\r\n\
#friends {\r\n\
	background: transparent !important;\r\n\
}\r\n\
\r\n\
.friends-header {\r\n\
	background: rgba(0, 0, 0, 0.61) !important;\r\n\
}\r\n\
\r\n\
.friends-table {\r\n\
	background: rgba(0, 0, 0, 0.53) !important;\r\n\
	margin-top: 0 !important;\r\n\
	box-shadow: inset 10px 10px 5px -6px rgba(0, 0, 0, 0.5);\r\n\
}\r\n\
\r\n\
.friends-table .friends-table-body {\r\n\
	padding-top: 20px !important;\r\n\
}\r\n\
\r\n\
.friends-table .friends-row:hover {\r\n\
	background: rgba(0, 0, 0, 0.35) !important;\r\n\
}\r\n\
\r\n\
.private-channels .search-bar {\r\n\
	background: rgba(10, 13, 16, 0) !important;\r\n\
}\r\n\
\r\n\
.ui-video-background-transition {\r\n\
	opacity: 0 !important;\r\n\
}\r\n\
\r\n\
.call {\r\n\
	background: transparent !important;\r\n\
}\r\n\
\r\n\
.title-wrap-dark {\r\n\
	background: transparent !important;\r\n\
}\r\n\
\r\n\
\r\n\
/* Date 1px line */\r\n\
\r\n\
.chat .divider:not(.divider-red)>div {\r\n\
	background: rgba(255, 0, 255, 0.2) !important;\r\n\
}\r\n\
\r\n\
.chat .divider>span {\r\n\
	background: rgba(255, 255, 255, 0.1) !important;\r\n\
	font-size: 12px;\r\n\
	text-transform: uppercase;\r\n\
	margin: 10px 0px;\r\n\
	border-radius: 0px;\r\n\
	opacity: 1;\r\n\
	padding: 5px 15px;\r\n\
	width: 100%;\r\n\
	text-align: center;\r\n\
}\r\n\
\r\n\
.chat .divider.divider-red>span {\r\n\
	background: rgba(200, 0, 0, 1) !important;\r\n\
	color: rgba(255, 255, 255, 1) !important;\r\n\
}\r\n\
\r\n\
.chat .divider:not(.divider-red)>span {\r\n\
	color: rgba(255, 255, 255, 1) !important;\r\n\
}\r\n\
\r\n\
.chat .divider>div {\r\n\
	display: none;\r\n\
}\r\n\
"

            fs.writeFileSync('./'+name+'.theme.css', css, 'utf-8');
            process.exit();
      });
});
