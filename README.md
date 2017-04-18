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

Family name Given name E-mail ORCID Initials for Index 

Match: Freisinger E 

Replace: Freisinger Eva

The match value is matched exactly (only creators that have exactly "Freisinger" as 
family name and "E" as given name are selected, but not, e.g. "Freisinger 
Elisabeth").


Developed by Peter West on behalf of University of Zurich, Switzerland who have 
contributed this development to the E-Prints Community.

## General setup

The setup procedure consists of the following steps

- Installation
- Configuration


## Installation

Copy the content cfg directories to your {eprints_root}/archives/{yourarchive}/cfg 
directories.


## Configuration

Either insert the snippet provided in cfg.d/plugins_snippet.pl into your cfg.d/plugins.pl
into the section "Plugin mapping", or rename the file, e.g. into 
cfg.d/z_extended_batchedit.pl .

Restart the web server to load the new configuration


## Use

Login as a staff user first. Batch Edit is only available to users with administrative 
rights. 

Carry out an advanced search, e.g. for an author name. Note: Quick search using Xapian
does not work with Batch Edit.

In the results list, click on "Batch Edit". 

In the Modify Records tab, choose e.g. the creators field from the dropdown menu. 
Click the Add Change button.

The creators sub-fields are displayed. Choose "Find and Replace value" from the dropdown
menu. Two lines are shown. Enter the condition in the upper line, the replace value in
the lower line.
Example: 
Find: Miller H
Replace: Miller Henry

Click button "Apply Changes". The author of all records of the result list found in the 
search before will be replaced by "Miller Henry" if the name matches *exactly* "Miller H".



