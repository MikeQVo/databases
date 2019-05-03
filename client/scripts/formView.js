var FormView = {

  $form: $('form'),

  initialize: function() {

    //prehaps do escape here https://underscorejs.org/#escape
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //var name = event.target.value;


  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};