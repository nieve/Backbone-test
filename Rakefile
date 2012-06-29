require 'rake'
require 'jasmine'
load 'jasmine/tasks/jasmine.rake'

desc "run jasmine tests"
task :jstests do
	sh "phantom-jasmine/phantomjs.exe phantom-jasmine/lib/run_jasmine_test.coffee phantom-jasmine/TestRunner.html"
end