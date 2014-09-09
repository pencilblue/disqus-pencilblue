/**
 * FacebookComments - Add Disqus comments to your articles
 * look like.
 *
 * @author Blake Callens blake@pencilblue.org>
 * @copyright 2014 PencilBlue, LLC
 */
function FacebookComments(){}

/**
 * Called when the application is being installed for the first time.
 *
 * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
 * The result should be TRUE on success and FALSE on failure
 */
FacebookComments.onInstall = function(cb) {
    cb(null, true);
};

/**
 * Called when the application is uninstalling this plugin.  The plugin should
 * make every effort to clean up any plugin-specific DB items or any in function
 * overrides it makes.
 *
 * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
 * The result should be TRUE on success and FALSE on failure
 */
FacebookComments.onUninstall = function(cb) {
    cb(null, true);
};

/**
 * Called when the application is starting up. The function is also called at
 * the end of a successful install. It is guaranteed that all core PB services
 * will be available including access to the core DB.
 *
 * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
 * The result should be TRUE on success and FALSE on failure
 */
FacebookComments.onStartup = function(cb) {
    pb.TemplateService.registerGlobal('disqus_shortname', function(flag, cb) {
        pb.plugins.getSetting('disqus_shortname', 'disqus-pencilblue', function(err, disqusShortname) {
            cb(err, disqusShortname);
        });
    });

    cb(null, true);
};

/**
 * Called when the application is gracefully shutting down.  No guarantees are
 * provided for how much time will be provided the plugin to shut down.
 *
 * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
 * The result should be TRUE on success and FALSE on failure
 */
FacebookComments.onShutdown = function(cb) {
    cb(null, true);
};

//exports
module.exports = FacebookComments;
