presto-extensions
=================

A set of chrome content scripts that add some convenience features to Presto.

The [only current script](presto-extensions/presto-extensions/clearfront.js) adds a button to the "Manage Fronts" page that removes all content from the current front, giving content programmers a clean slate to work with.

I would hope that anyone working with presto would find these helpful. If you have a script you already use and find helpful, please submit a pull request to share it with others.

So far, these have only been tested on the training site. To use in your newsroom, you'll have to edit the [manifest.json](presto-extensions/presto-extensions/manifest.json) file to look like so:

```
...
"content_scripts": [
    {
        // For clearfront.js
        "matches": ["https://<YOUR PRESTO URL>/Manage/ManageFronts.aspx"],
        "js": ["jquery.js", "clearfront.js"]
    }
]
...
```

---
### Current Scripts
* [clearfront.js](presto-extensions/presto-extensions/clearfront.js)
    - Adds a button to the "Manage Fronts" page that clears all content from the current front. Useful if you want to work with a clean slate.
