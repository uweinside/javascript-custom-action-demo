const core = require('@actions/core');

try {
  // Get input
  const name = core.getInput('name');

  const message = `Hello ${name} from a JavaScript Action 🚀`;

  // Log to console
  console.log(message);

  // Set output
  core.setOutput('greeting', message);

} catch (error) {
  core.setFailed(error.message);
}
