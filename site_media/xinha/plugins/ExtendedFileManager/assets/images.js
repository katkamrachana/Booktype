/* This compressed file is part of Xinha. For uncompressed sources, forum, and bug reports, go to xinha.org */
/* This file is part of version 0.96beta2 released Fri, 20 Mar 2009 11:01:14 +0100 */
function i18n(a){return Xinha._lc(a,"ExtendedFileManager")}function changeDir(c){showMessage("Loading");var d=window.top.document.getElementById("manager_mode").value;var b=window.top.document.getElementById("viewtype");var a=b.options[b.selectedIndex].value;location.href=_backend_url+"__function=images&mode="+d+"&dir="+c+"&viewtype="+a;document.cookie="EFMStartDir"+d+"="+c}function newFolder(b,d){var e=window.top.document.getElementById("manager_mode").value;var c=window.top.document.getElementById("viewtype");var a=c.options[c.selectedIndex].value;location.href=_backend_url+"__function=images&mode="+e+"&dir="+b+"&newDir="+d+"&viewtype="+a}function renameFile(d){var c=d.replace(/.*%2F/,"").replace(/\..*$/,"");var b=function(e){if(e==""||e==null||e==c){alert(i18n("Cancelled rename."));return false}var i=window.top.document.getElementById("manager_mode").value;var h=window.top.document.getElementById("dirPath");var g=h.options[h.selectedIndex].value;h=window.top.document.getElementById("viewtype");var f=h.options[h.selectedIndex].value;location.href=_backend_url+"__function=images&mode="+i+"&dir="+g+"&rename="+d+"&renameTo="+e+"&viewtype="+f};if(Xinha.ie_version>6){popupPrompt(i18n("Please enter new name for this file..."),c,b,i18n("Rename"))}else{var a=prompt(i18n("Please enter new name for this file..."),c);b(a)}}function renameDir(c){function b(d){if(d==""||d==null||d==c){alert(i18n("Cancelled rename."));return false}var h=window.top.document.getElementById("manager_mode").value;var g=window.top.document.getElementById("dirPath");var f=g.options[g.selectedIndex].value;g=window.top.document.getElementById("viewtype");var e=g.options[g.selectedIndex].value;location.href=_backend_url+"__function=images&mode="+h+"&dir="+f+"&rename="+c+"&renameTo="+d+"&viewtype="+e}if(Xinha.ie_version>6){popupPrompt(i18n("Please enter new name for this folder..."),c,b,i18n("Rename"))}else{var a=prompt(i18n("Please enter new name for this folder..."),c);b(a)}}function copyFile(b,d){var c=window.top.document.getElementById("dirPath");var a=c.options[c.selectedIndex].value;window.top.pasteButton({dir:a,file:b,action:d+"File"})}function copyDir(a,d){var c=window.top.document.getElementById("dirPath");var b=c.options[c.selectedIndex].value;window.top.pasteButton({dir:b,file:a,action:d+"Dir"})}function paste(d){var e=window.top.document.getElementById("manager_mode").value;var c=window.top.document.getElementById("dirPath");var b=c.options[c.selectedIndex].value;c=window.top.document.getElementById("viewtype");var a=c.options[c.selectedIndex].value;location.href=_backend_url+"__function=images&mode="+e+"&dir="+b+"&paste="+d.action+"&srcdir="+d.dir+"&file="+d.file+"&viewtype="+a}function updateDir(d){var e=window.top.document.getElementById("manager_mode").value;document.cookie="EFMStartDir"+e+"="+d;var c=window.top.document.getElementById("dirPath");if(c){for(var b=0;b<c.length;b++){var a=c.options[b].text;if(a==d){c.selectedIndex=b;showMessage("Loading");break}}}}function emptyProperties(){toggleImageProperties(false);var a=window.top.document;a.getElementById("f_url").value="";a.getElementById("f_alt").value="";a.getElementById("f_title").value="";a.getElementById("f_width").value="";a.getElementById("f_margin").value="";a.getElementById("f_height").value="";a.getElementById("f_padding").value="";a.getElementById("f_border").value="";a.getElementById("f_borderColor").value="";a.getElementById("f_backgroundColor").value=""}function toggleImageProperties(b){var a=window.top.document;if(b==true){a.getElementById("f_width").value="";a.getElementById("f_margin").value="";a.getElementById("f_height").value="";a.getElementById("f_padding").value="";a.getElementById("f_border").value="";a.getElementById("f_borderColor").value="";a.getElementById("f_backgroundColor").value=""}a.getElementById("f_width").disabled=b;a.getElementById("f_margin").disabled=b;a.getElementById("f_height").disabled=b;a.getElementById("f_padding").disabled=b;a.getElementById("f_align").disabled=b;a.getElementById("f_border").disabled=b;a.getElementById("f_borderColor").value="";a.getElementById("f_backgroundColor").value="";a.getElementById("constrain_prop").disabled=b}function selectImage(c,f,d,b){var a=window.top.document;if(a.getElementById("manager_mode").value=="image"){var e=a.getElementById("f_url");e.value=c;e=a.getElementById("f_alt");e.value=f;e=a.getElementById("f_title");e.value=f;if(d==0&&b==0){toggleImageProperties(true)}else{toggleImageProperties(false);var e=a.getElementById("f_width");e.value=d;var e=a.getElementById("f_height");e.value=b;var e=a.getElementById("orginal_width");e.value=d;var e=a.getElementById("orginal_height");e.value=b;update_selected()}}else{if(a.getElementById("manager_mode").value=="link"){var e=a.getElementById("f_href");e.value=c;var e=a.getElementById("f_title");e.value=f}}return false}var _current_selected=null;function update_selected(){var a=window.top.document;if(_current_selected){_current_selected.className=_current_selected.className.replace(/(^| )active( |$)/,"$1$2");_current_selected=null}var d=a.getElementById("f_url").value;var e=a.getElementById("dirPath");var f=e.options[e.selectedIndex].text;var b=new RegExp("^("+f.replace(/([\/\^$*+?.()|{}[\]])/g,"\\$1")+")([^/]*)$");if(b.test(d)){var c=document.getElementById("holder_"+asc2hex(RegExp.$2));if(c){_current_selected=c;c.className+=" active"}}showPreview(d)}function asc2hex(c){var d="";for(var a=0;a<c.length;a++){var b=(c.charCodeAt(a)).toString(16);if(b.length==1){b="0"+b}d+=b}return d}function showMessage(b){var a=window.top.document;var d=a.getElementById("message");var c=a.getElementById("messages");if(d&&c){if(d.firstChild){d.removeChild(d.firstChild)}d.appendChild(a.createTextNode(i18n(b)));c.style.display="block"}}function updateDiskMesg(b){var a=window.top.document;var c=a.getElementById("diskmesg");if(c){if(c.firstChild){c.removeChild(c.firstChild)}c.appendChild(a.createTextNode(b))}}function addEvent(d,c,a){if(d.addEventListener){d.addEventListener(c,a,true);return true}else{if(d.attachEvent){var b=d.attachEvent("on"+c,a);return b}else{return false}}}function confirmDeleteFile(a){if(confirm(i18n('Delete file "$file='+a+'$"?'))){return true}return false}function confirmDeleteDir(a,b){if(confirm(i18n('Delete folder "$dir='+a+'$"?'))){return true}return false}function showPreview(a){window.parent.document.getElementById("f_preview").src=a?window.parent._backend_url+"__function=thumbs&img="+a:window.parent.opener.Xinha.getPluginDir("ExtendedFileManager")+"/img/1x1_transparent.gif"}addEvent(window,"load",init);