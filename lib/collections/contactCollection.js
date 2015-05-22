Contacts = new Mongo.Collection("contacts");

Contacts.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Your Name",
    optional: false,
    autoform: {
      afFieldInput: {
        type: "text"
      }
    }
  },
  email: {
    type: String,
    label: "Your Email",
    optional: false,
    autoform: {
      afFieldInput: {
        type: "email"
      }
    }
  },
  phone: {
    type: String,
    label: "Your Phone Number",
    optional: true,
    autoform: {
      afFieldInput: {
        type: "tel"
      }
    }
  },
  reason: {
    type: String,
    label: "Reason for Contacting",
    optional: false,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Training", value: 'Training'},
          {label: "Consulting", value: 'Consulting'},
          {label: "Lecturing", value: 'Lecturing'},
          {label: "Other", value: 'Other'}
        ];
      }
    },
  },
  courses: {
    type: [String],
    label: "Which courses are you interested in?",
    optional: true,
    autoform: {
      type: "select-checkbox",
    }
  },
  consulting: {
    type: [String],
    label: "Which consulting services are you interested in?",
    optional: true,
    autoform: {
      type: "select-checkbox",
    }
  },
  subject: {
    type: String,
    label: "Subject",
    optional: false,
    autoform: {
      afFieldInput: {
        type: "text"
      }
    }
  },
  message: {
    type: String,
    label: "Your Message",
    optional: false,
    autoform: {
      afFieldInput: {
        type: "textarea"
      }
    }
  },
}));

Contacts.allow({
  insert: function (doc) {
    return true;
  },
});