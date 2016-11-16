export PATH :=$(shell npm bin):$(PATH)

JS = $(shell find js -name "*.js")

bundle.js: $(JS)
	browserify js/main.js > $@
