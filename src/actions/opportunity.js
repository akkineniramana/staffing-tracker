

export const getOppList = () => ({
    "type" : "GETOPPLIST"
})

export const createOpp = ({
  opp = {},
  domain = '',
  startDate = '',
  infyManager = '',
  sponsor = '',
  demands = []

} = {}
) => ({
    "type" : "CREATEOPP",
    "opportunity" : {
        opp,
        domain,
        startDate,
        infyManager,
        sponsor,
        demands
    }
})
    