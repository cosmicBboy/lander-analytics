AdminConfig = {
  name: 'Lander Analytics',
  adminEmails: ['admin@example.com'],
  collections: {
    About: {
    	tableColumns: [
    		{label: "Title", name: "title"},
    		{label: "Current Page", name: "currentContent"}
    	],
      color: "green"
    },
    DataTalent: {
      tableColumns: [
        {label: "Title", name: "title"},
        {label: "Current Page", name: "currentContent"}
      ],
      color: "green"
    },
    Training: {
      tableColumns: [
        {label: "Title", name: "title"},
        {label: "Current Page", name: "currentContent"}
      ],
      color: "red"
    },
    Consulting: {
      tableColumns: [
        {label: "Title", name: "title"},
        {label: "Current Page", name: "currentContent"}
      ],
      color: "red"
    },
    Books: {
      tableColumns: [
        {label: "Title", name: "title"},
        {label: "Current Page", name: "currentContent"}
      ],
      color: "yellow"
    },
    Contacts: {
    tableColumns: [
        {label: "Name", name: "name"}
      ],
    },
  },
};