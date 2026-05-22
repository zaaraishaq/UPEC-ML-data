// Database Controller Logic
const UPECGenoDB = {
    metadata: window.UPEC_Metadata_Complete || [],
    pakistaniIsolates: window.Pakistani_Isolates || [],
    mlResults: window.model_performance_results || [],
    shapValues: window.Table_SHAP_Mean_Absolute_Values || [],
    prevalence: window.Table_Feature_Prevalence_Percentages || [],

    // Example: Method to search isolates by ID
    findIsolate(id) {
        return this.metadata.find(iso => iso['id'] === id);
    },
    
    // Example: Get model performance by name
    getModelPerformance(modelName) {
        return this.mlResults.find(m => m.Model === modelName);
    }
};
