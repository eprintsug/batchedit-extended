# batchedit-extended
##Extended Batch Editing Tool that allows to Find and Replace on multiple compound fields

The improved Batch Edit tool is an extension to the Batch Edit available in EPrints. 
Its modifications are:

- Applicable to all multiple value and compound fields (e.g. creators, languages, ...). 
- Introduces a new Find and Replace value option as in word processors:
There are two lines for the Find and Replace value, respectively. 

Example for creator field:

Family name Given name E-mail ORCID Initials for Index 
Match: Freisinger E 
Replace: Freisinger Eva 

The match value is matched exactly (only creators that have exactly "Freisinger" as 
family name and "E" as given name are selected).

- The position of the matched line in the multiple field is retained. In other words, 
the order of creators in an eprint is retained.


Developed by Peter West on behalf of University of Zurich, Switzerland who have 
contributed this development to the E-Prints Community.

##General setup

The setup procedure consists of the following steps

- Installation
- Configuration


##Installation

Copy the content of the bin and cfg directories to the respective 
{eprints_root}/archives/{yourarchive}/bin and {eprints_root}/archives/{yourarchive}/cfg 
directories.


##Configuration


##Use


