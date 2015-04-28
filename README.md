[Disqus Comments for PencilBlue](http://pencilblue.org)
=====

##### Add Disqus comments to your articles

**Note:** Disqus currenlty supports only one thread per page. If you include Disqus comments in a template that is used to render multiple articles on the same page, only the first article will display a Disqus thread.

Installation and Setup
-----

1. Clone the disqus-pencilblue repository into the plugins folder of your PencilBlue installation
  ```shell
  cd [pencilblue_directory]/plugins
  git clone https://github.com/pencilblue/disqus-pencilblue.git
  ```

2. Install the disqus-pencilblue plugin through the manage plugins screen in the admin section (/admin/plugins).

3. Go to the disqus-pencilblue settings screen (/admin/plugins/settings/disqus-pencilblue) and set your Disqus shortname.

4. Add the ```^tmp_disqus_comments^``` directive in your article template where you want the comments to appear.

5. Add the ```^tmp_disqus_comment_counts^``` directive at the bottom of pages where you want to display the comment counts for a list of articles. Documentation on adding comment count placeholders can be found [here](https://help.disqus.com/customer/portal/articles/565624-adding-comment-count-links-to-your-home-page).
