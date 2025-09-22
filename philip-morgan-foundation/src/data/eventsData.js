const eventsData = [
  {
    day: '06',
    month: 'April',
    title: '2nd Annual Philip Morgan Foundation Cornhole Tournament',
    locationName: 'Valley Brook Country Club',
    locationAddress: '15 River Vale Road, River Vale, NJ 07675',
    sponsorUrl: '',
    timeframe: "1pm-5pm",
    isActive: false,
    attachments: []
  },
  {
    day: '28',
    month: 'April',
    title: 'American Red Cross Blood Drive',
    locationName: 'Emerson Senior Center',
    locationAddress: '20 Palisade Avenue, Emerson, NJ 07630',
    sponsorUrl: '',
    timeframe: "9am-2pm",
    isActive: false,
    attachments: [
      { name: "Flyer", url: require("../PageComponents/Events/attachments/Philip Morgan Foundation April 28, 2024 flyer.pdf") },
      { name: "Rapid Pass", url: require("../PageComponents/Events/attachments/rapid-pass.pdf") }
    ]
  },
  {
    day: '22',
    month: 'Mar',
    title: '3rd Annual Philip Morgan Foundation Cornhole Tournament',
    locationName: 'Valley Brook Country Club',
    locationAddress: '15 River Vale Road, River Vale, NJ 07675',
    sponsorUrl: '',
    timeframe: "1pm-5pm",
    isActive: false,
    attachments: [
      { name: "Learn More", url: "#/cornhole-event" },
    ]
  },
  {
    day: '27',
    month: 'April',
    title: 'American Red Cross Blood Drive',
    locationName: 'Emerson Senior Center',
    locationAddress: '20 Palisade Avenue, Emerson, NJ 07630',
    sponsorUrl: '',
    timeframe: "9am-2pm",
    isActive: false,
    attachments: [
      { name: "Rapid Pass", url: require("../PageComponents/Events/attachments/rapid-pass.pdf") }
    ]
  },
]

export default eventsData