AdminConfig = {
  name: 'Lander Analytics',
  adminEmails: ['admin@example.com'],
  collections: {
    Contacts: {
		tableColumns: [
    		{label: "Name", name: "name"}
    	],
    },
    About: {
    	tableColumns: [
    		{label: "Title", name: "title"},
    		{label: "Current Page", name: "currentContent"}
    	],
    },
    Books: {
      tableColumns: [
        {label: "Title", name: "title"},
        {label: "Current Page", name: "currentContent"}
      ],
    },
    Training: {
      tableColumns: [
        {label: "Title", name: "title"},
        {label: "Current Page", name: "currentContent"}
      ],
    },
    DataTalent: {
      tableColumns: [
        {label: "Title", name: "title"},
        {label: "Current Page", name: "currentContent"}
      ],
    },
  },
};