import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    savePost(post) {
      post
        .save()
        .then((post) => {
          this.transitionTo('posts.post', post);
        });
    },

    cancelEditing(post) {
      post.rollbackAttributes();
      this.transitionTo('posts.post', post);
    },

    willTransition(transition) {
      let post = this.get('controller.model');

      if (post.get('hasDirtyAttributes')) {
        if (window.confirm('Vil du forkaste endringene dine?')) {
          post.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
