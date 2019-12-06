# batchedit-extended
## Extended Batch Editing Tool that allows to Find and Replace on multiple compound fields

The improved Batch Edit tool is an extension to the Batch Edit available in EPrints. 

Its modifications are:

- Two lines or columns are displayed: Match value and replace value.
- All subfields available are displayed.
- Fields to be replaced are matched exactly.
- The position of the matched line in the multiple field remains unchanged. In other 
words, if one does a find/replace in the creator fields, the order of creators in an 
eprint is retained.


Example for creator field:

Family name  Given name

_Match_: `Freisinger E`

_Replace_: `Freisinger Eva`

The match value is matched exactly (only creators that have exactly `Freisinger` as 
family name and `E` as given name are selected, but not, e.g. `Freisinger Elisabeth`).


Developed by Peter West on behalf of University of Zurich, Switzerland who have 
contributed this development to the E-Prints Community.

## General setup

The setup procedure consists of the following steps

- Installation
- Configuration


## Installation

## As epmi

run `tools/epm enable batchedit-extended`

## Not as epmi

Copy the contents of `lib` to the `cfg` directory of your `{eprints_root}/archives/{yourarchive}/cfg` 
directory, i.e. `cd lib; cp -r * {eprints_root}/archives/{yourarchive}/cfg`


## Configuration

Either insert the snippet provided in `cfg/cfg.d/z_extended_batchedit.pl` into your `cfg.d/plugins.pl`
into the section _Plugin mapping_, or just copy the file into `{eprints_root}/archives/{yourarchive}/cfg/cfg.d/`.

Restart the web server to load the new configuration


## Use

Login as a staff user first. Batch Edit is only available to users with administrative 
rights. 

Carry out an _advanced_ search, e.g. for an author name.

**Note: _Quick search using Xapian_ does not work with Batch Edit!**

In the results list, click on _Batch Edit_. 

In the _Modify Records_ tab, choose e.g. the creators field from the dropdown menu. 
Click the _Add Change_ button.

The creators sub-fields are displayed. Choose _Find and Replace value_ from the dropdown
menu. Two lines are shown. Enter the condition in the upper line, the replace value in
the lower line.

Example: 
_Find_: `Miller H`
_Replace_: `Miller Henry`

Click button _Apply Changes_. The author of all records of the result list found in the 
search before will be replaced by `Miller Henry` if the name matches _exactly_ `Miller H`.



