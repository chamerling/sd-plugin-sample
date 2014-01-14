/**
* Sample plugin for @obazoud status dashboard
*
* @author Christophe Hamerling <christophe.hamerling@gmail.com>
*/

module.exports = function(statusdashboard) {
  
  console.log('=== Status Dashboard Sample Plugin ===');
  console.log('You have access to settings using statusdashboard.settings', statusdashboard.settings);
  console.log('And to the API to subscribe to events using statusdashboard.api as below...');
  
  statusdashboard.api.on('refresh', function(status) {
    console.log('Got a status refresh', status)
  });
  
}