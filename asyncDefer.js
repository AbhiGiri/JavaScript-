//// Async and Defer Attributes :: 
// "async" and "defer" are 2 "HTML boolean Attributes", that are used to load External JS files, in an asynchronous way, 
// but they have different behaviors.

// When We include a script tag with a "src" attribute in an HTML page, 
// the browser will load the external JS file and execute it before moving on to the next line of HTML code. 
// This can sometimes cause performance issues, especially if the JS file is large and takes a long time to load and execute.

// To solve this issue, We can use the "async" or "defer" attributes in the "script" tag to load the JavaScript file asynchronously. 

// Async and Defer are boolean attributes.
// these are used along with script tag (<script ... />) efficiently to web page.

//// <script src="script1.js" async ></script>
//// <script src="script2.js" defer ></script>

// In normal, HTML parsing goes on, as soon as the script tag is encountered, the script is fetched/downloaded 
// there, and then they are executed, after that, HTML parsing continues.

// In Async. HTML parsing goes on and scripts are fetched in async manner, and as soon as script downloaded
// the script is executed. after only HTML parsing continues.

// In Defer, HTML parsing goes on and scripts are being fetched parallely, 
// and only executed, when the HTML parsing is completed.

//// IMPORTANT:: 
// Async attribute doesnt gurantee the Order of Execution of script (which are dependent on eachother),
// but Defer does.

