const nav = {
    "name": "Model Evaluation",
    "tab": "model_statistics",
    "buttons": [
        "./addStatisticsToObservations",
        "./anovaLikelihoodRatio",
        {
            "name": "Compare",
            "icon": "icon-compare",
            "children": [
                "./compareModels",
                "./compareNModels",
                "./compareQuantReg"
            ]
        },
        "./confidenceInterval",
        {
            "name": "Fit",
            "icon": "icon-ruler",
            "children": [
                "./AIC",
                "./BIC",
                "./hosmerLemeshow",
                "./pseudoRSquared"
            ]
        },
        "./bonFerroniOutlierTest",
        "./plotAModel",
        {
            "name": "Predict",
            "icon": "icon-y-hat",
            "children": [
                "./Scoring/Scoring"
            ]
        },
        "./stepwise",
        {
            "name": "Summarize",
            "icon": "icon-sigma",
            "children": [
                "./modelLevelStatistics",
                "./parameterLevelStats",
                "./summarizeAModel",
                "./summarizeNModels"
            ]
        },
        "./varianceInflationFactors"
    ]
}

module.exports.nav = nav
