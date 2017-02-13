# batchedit-extended
##Extended Batch Editing Tool that allows to Find and Replace on multiple compound fields

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

##General setup

The setup procedure consists of the following steps

- Installation
- Configuration


##Installation

Copy the content cfg directories to your {eprints_root}/archives/{yourarchive}/cfg 
directories.


##Configuration


##Use


