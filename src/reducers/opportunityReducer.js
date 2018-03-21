

const defaultOppList = [
  {
    opp: {
      name: "Azure Requirements",
      type: "New",
      status: "Active"
    },
    domain: "Dev",
    startDate: "02/25/2018",
    infyManager: "Test Manager",
    sponsor: "test@gap.com",
    demands: [
      {
        role: "Technology Analyst",
        location: "US",
        fulfilled: 2,
        total: 3,
        rateCard: 50,
        skillSet: "javascript",
        startDate: "02/26/2018",
        endDate: "05/25/2018",
        tmsId: "A235B"
      }
    ]
  },
  {
    opp: {
      name: "Azure Requirements",
      type: "New",
      status: "Active"
    },
    domain: "Dev",
    startDate: "02/25/2018",
    infyManager: "Test Manager",
    sponsor: "test@gap.com",
    demands: [
      {
        role: "Technology Analyst",
        location: "US",
        fulfilled: 2,
        total: 3,
        rateCard: 50,
        skillSet: "javascript",
        startDate: "02/26/2018",
        endDate: "05/25/2018",
        tmsId: "A235B"
      }
    ]
  }
];

export default  (state=defaultOppList, action) => {
    switch (action.type) {
      case "GETOPPLIST":
        return state;
      case "CREATEOPP":
        return [...state, action.opportunity];
      default:
        return state;
    }
}