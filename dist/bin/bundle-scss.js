#!/usr/bin/env node
'use strict';
const app = require('commander');
const cfg = require('../../package.json');
const bundleScss = require('../index');
app
    .version(cfg.version)
    .option('-d, --dest <dest>', 'destination of bundled file')
    .option('-m, --mask <mask>', 'mask for files like ./src/**/*.theme.scss')
    .option('-s, --sort <sort>', 'Optional. Sort priority for files. ' +
    'Example: `variable` - will pass all variables at beginning' +
    "Default priority ['theme-variable', 'variable', 'mixin']")
    .parse(process.argv);
if (app.mask && app.dest) {
    bundleScss(app.mask, app.dest, app.sort);
}
else {
    throw new Error('Please check options: -m, -d. \nLooks like some of them are not specified');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLXNjc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmluL2J1bmRsZS1zY3NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxZQUFZLENBQUM7QUFFYixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDMUMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXZDLEdBQUc7S0FDQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztLQUNwQixNQUFNLENBQUMsbUJBQW1CLEVBQUUsNkJBQTZCLENBQUM7S0FDMUQsTUFBTSxDQUFDLG1CQUFtQixFQUFFLDJDQUEyQyxDQUFDO0tBQ3hFLE1BQU0sQ0FDTCxtQkFBbUIsRUFDbkIscUNBQXFDO0lBQ25DLDREQUE0RDtJQUM1RCwwREFBMEQsQ0FDN0Q7S0FDQSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXZCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUFDLElBQUksQ0FBQyxDQUFDO0lBQ04sTUFBTSxJQUFJLEtBQUssQ0FDYiwyRUFBMkUsQ0FDNUUsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBhcHAgPSByZXF1aXJlKCdjb21tYW5kZXInKTtcclxuY29uc3QgY2ZnID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJyk7XHJcbmNvbnN0IGJ1bmRsZVNjc3MgPSByZXF1aXJlKCcuLi9pbmRleCcpO1xyXG5cclxuYXBwXHJcbiAgLnZlcnNpb24oY2ZnLnZlcnNpb24pXHJcbiAgLm9wdGlvbignLWQsIC0tZGVzdCA8ZGVzdD4nLCAnZGVzdGluYXRpb24gb2YgYnVuZGxlZCBmaWxlJylcclxuICAub3B0aW9uKCctbSwgLS1tYXNrIDxtYXNrPicsICdtYXNrIGZvciBmaWxlcyBsaWtlIC4vc3JjLyoqLyoudGhlbWUuc2NzcycpXHJcbiAgLm9wdGlvbihcclxuICAgICctcywgLS1zb3J0IDxzb3J0PicsXHJcbiAgICAnT3B0aW9uYWwuIFNvcnQgcHJpb3JpdHkgZm9yIGZpbGVzLiAnICtcclxuICAgICAgJ0V4YW1wbGU6IGB2YXJpYWJsZWAgLSB3aWxsIHBhc3MgYWxsIHZhcmlhYmxlcyBhdCBiZWdpbm5pbmcnICtcclxuICAgICAgXCJEZWZhdWx0IHByaW9yaXR5IFsndGhlbWUtdmFyaWFibGUnLCAndmFyaWFibGUnLCAnbWl4aW4nXVwiXHJcbiAgKVxyXG4gIC5wYXJzZShwcm9jZXNzLmFyZ3YpO1xyXG5cclxuaWYgKGFwcC5tYXNrICYmIGFwcC5kZXN0KSB7XHJcbiAgYnVuZGxlU2NzcyhhcHAubWFzaywgYXBwLmRlc3QsIGFwcC5zb3J0KTtcclxufSBlbHNlIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAnUGxlYXNlIGNoZWNrIG9wdGlvbnM6IC1tLCAtZC4gXFxuTG9va3MgbGlrZSBzb21lIG9mIHRoZW0gYXJlIG5vdCBzcGVjaWZpZWQnXHJcbiAgKTtcclxufVxyXG4iXX0=