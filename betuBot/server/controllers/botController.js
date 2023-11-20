// Example bot controller handling start and stop functionalities
const startBot = (req, res) => {
    // Logic to start the bot
    // This could involve web scraping, interacting with e-commerce APIs, etc.
    // Remember to handle errors and send appropriate responses
    res.json({ message: 'Bot started successfully' });
};

const stopBot = (req, res) => {
    // Logic to stop the bot
    // Clean up tasks, stop any ongoing processes, etc.
    // Remember to handle errors and send appropriate responses
    res.json({ message: 'Bot stopped' });
};

module.exports = { startBot, stopBot };  



