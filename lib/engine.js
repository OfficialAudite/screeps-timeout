module.exports = function (config) {
    const driver = config.engine.driver;

    // Store the original getRuntimeData function
    const originalGetRuntimeData = driver.getRuntimeData;

    // Override getRuntimeData to inject the timeout property
    driver.getRuntimeData = function (...args) {
        const data = originalGetRuntimeData.apply(this, args);

        // Ensure data and data.cpu are defined before adding timeout
        if (data && typeof data.cpu === 'number') {
            data.timeout = (data.cpu + 50) * 1000;
        } else {
            // Fallback or default value if data.cpu is undefined
            data.timeout = 50000; // Default to 50,000 milliseconds
        }

        return data;
    };
};