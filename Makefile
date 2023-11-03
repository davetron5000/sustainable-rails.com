.DEFAULT_GOAL := default

ifndef ENV
$(error ENV must be set)
endif

## Source Files
SRC_DIR=src

HTML_SRC_DIR=$(SRC_DIR)/html
HTML_SRC_FILES=$(shell find $(HTML_SRC_DIR) -name '*.html' -not -path '*/templates/*')

CSS_SRC_DIR=$(SRC_DIR)/css
CSS_SRC_FILE=$(CSS_SRC_DIR)/index.css

IMAGES_SRC_DIR=$(SRC_DIR)/images
IMAGES_SRC_FILES=$(shell find $(IMAGES_SRC_DIR) -name '*.*')

ASSETS_SRC_DIR=$(SRC_DIR)/assets
ASSETS_SRC_FILES=$(shell find $(ASSETS_SRC_DIR) -name '*.*')

## Destination Files
DEST_DIR=site/$(ENV)

HTML_DEST_DIR=$(DEST_DIR)
HTML_DEST_FILES=${subst $(HTML_SRC_DIR),$(HTML_DEST_DIR),$(HTML_SRC_FILES)}

IMAGES_DEST_DIR=$(DEST_DIR)/images
IMAGES_DEST_FILES=${subst $(IMAGES_SRC_DIR),$(IMAGES_DEST_DIR),$(IMAGES_SRC_FILES)}

ASSETS_DEST_DIR=$(DEST_DIR)/assets
ASSETS_DEST_FILES=${subst $(ASSETS_SRC_DIR),$(ASSETS_DEST_DIR),$(ASSETS_SRC_FILES)}

CSS_DEST_DIR=$(DEST_DIR)/css

CSS_DEST_FILE=$(CSS_DEST_DIR)/styles.css
$(CSS_DEST_FILE) : $(CSS_SRC_FILE)
	npx esbuild $(MINIFY_CSS_FLAG) --sourcemap --bundle $(CSS_SRC_FILE) --outfile=$(CSS_DEST_FILE)

$(HTML_DEST_DIR)/%.html: $(HTML_SRC_DIR)/%.html
	npx ejs -o $@ $<

$(IMAGES_DEST_DIR):
	@mkdir -p $(IMAGES_DEST_DIR)

$(ASSETS_DEST_DIR):
	@mkdir -p $(ASSETS_DEST_DIR)

$(IMAGES_DEST_DIR)/%: $(IMAGES_SRC_DIR)/%
	cp $< $@

$(ASSETS_DEST_DIR)/%: $(ASSETS_SRC_DIR)/%
	cp $< $@

clean:
	@rm -rf $(DEST_DIR)

debug:
	@echo $(ASSETS_DEST_FILES)

default: $(CSS_DEST_FILE) $(HTML_DEST_FILES) $(IMAGES_DEST_DIR) $(IMAGES_DEST_FILES) $(ASSETS_DEST_DIR) $(ASSETS_DEST_FILES)
	@echo Done with $(ENV)
