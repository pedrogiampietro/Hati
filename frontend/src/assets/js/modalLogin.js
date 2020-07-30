function toggleLogin(event, element) {
if(typeof CustomJS !== 'undefined')
CustomJS.toggleLogin(event, element);
else
document.location.replace('login');
};

if(typeof CustomJS !== 'undefined')
CustomJS.initialize();

if(typeof Shadowbox !== 'undefined')
Shadowbox.init();
