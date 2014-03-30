# cts-spec


Specification of the Canonical Text Services protocol (CTS) version 5.0.rc.2. 

The source text of the specification is in markdown format in the file `md/specification.md`.  The
source text systematically refers to the current version number with the gradle property notation `@version@`.  
This reference is replaced with the actual current version value in the build process.
 
The Relax NG schemas defining the syntax of the CTS replies are in the directory `reply_schemas`.

## Draft status and discussion

The last released version of the specification is 5.0.rc.2.  Current work is on 
5.0.rc.3. See the project wiki at <https://github.com/neelsmith/cts_spec/wiki> for more information 
about status and future plans.


## Using this build file ##

This build file includes a task named `release` that replaces references to the project's `version` property with the value of the current version, and places the resulting file in `build/pkg`.  It places a zip archive of this in `build/distributions`, which can be published to a maven repository with the task `uploadArchives`.  


### Creating a web interface with `bfdocs` ###

Prerequisites:  beautifuldocs, <http://beautifuldocs.com/>.

We are currentl using beautifuldocs to install searchable HTML versions of this specification on a number
of web sites.  The following sequence is not yet packaged as a build task, but can easily be done as follows:

	gradle release
	cp md/manifest.json build/pkg
	cd build/pkg
	bfdocs manifest.json


### Publishing a nexus artifact
To configure the appropriate settings for publishing a zip distribution to a maven server, make a copy of the settings file `publish.gradle`, and set the `pub` property to its name when you run the `uploadArchives` task, e.g.,

	cp publish.gradle publishlocal.gradle
	... [edit values in publishlocal.gradle]
	gradle -Ppub=publishlocal.gradle uploadArchives
