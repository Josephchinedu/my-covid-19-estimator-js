const covid19ImpactEstimator = (data) => {
    const input = {
        region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
        },
        periodType: "days",
        timeToElapse: 58,
        reportedCases: 674,
        population: 66622705,
        totalHospitalBeds: 1380614
    };
    return{
        data: {}, 
        impact: {}, 
        severeImpact: {},
        currentlyInfected: reportedCases * 10
    }
};

export default covid19ImpactEstimator;
