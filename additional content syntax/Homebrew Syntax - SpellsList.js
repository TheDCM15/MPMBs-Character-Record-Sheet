/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Spell
	Effect:		This is the syntax for adding a new spell
	Sheet:		v12.999 (2018-02-19)

	If you are looking for a way to add a cantrip/spell to the drop-down boxes in the attack sections, then you will have to look at the WeaponsList syntax and add the cantrip/spell as a weapon (as well)
*/

var iFileName = "Homebrew Syntax - SpellsList.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

SpellsList["abi-dalzim's horrid wilting"] = { //Object name; note the use of only lower case! The spelling here is used to identify the spell with and has to be exactly the same as "name" but in lower case. Also note the absence of the word "var" and the use of brackets []

	name : "Abi-Dalzim's Horrid Wilting", //Required; The name of the spell. This will be put in the Spell field on the Spell Sheet. Except, if a "nameShort" is present, this name will be put in the mouseover text (tooltip) of the Spell field on the Spell Sheet.

	nameShort : "Abi-D's Horrid Wilting", //Optional; A shortened name of the spell that fits on the Spell Sheet. If present, this name will be put on the Spell Sheet and the full name above will be put in the mouseover text (tooltip) of the Spell field on the Spell Sheet.

	nameAlt : "Horrid Wilting", //Optional; An alternative name that can be used to identify the spell with on the sheet

	regExpSearch : /^(?=.*horrid)(?=.*wilting).*$/i, //Optional; If the name is too complex or can have to many different variations, use this to define the regular expression of what to look for. If this looks too complicated, do not use it and remove this line!

	classes : ["bard", "cleric", "druid", "sorcerer", "wizard"], //Optional; Array of all the classes that have this spell on their list. Even with one entry you still need to put the brackets around it []. Note the use of only lower case as these entries are identical to the ClassList object names! If you omit this attribute, the spell will only be selectable through the dependencies, see below. If you want the spell to be available for subclasses and through the SpellcastingBonus object, just add an empty array, i.e. classes : [],

	source : ["HB", 0], //Required; the source and the page number. "HB" stands for homebrew. //Note that filling out this incorrectly will prohibit the spell from showing up in the spell selection dialogues. //If you want to add a custom source, see "Homebrew Syntax - SourceList.js" // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	level : 0, //Required; The Spell Level. Has to be a number from 0 to 9 // use 1 if you are adding a psionic discipline, and 0 for a psionic talent

	school : "Trans", //Optional; Spell School as it will show up on the Spell Sheet; Can only select from: "Abjur", "Conj", "Div", "Ench", "Evoc", "Illus", "Necro", "Trans", and for psionic discipline orders: "Avatar", "Awake", "Immor", "Nomad", "Wu Jen"

	time : "1 min", //Required; Casting Time as it will show up on the Spell Sheet

	range : "Touch", //Required; Spell Range as it will show up on the Spell Sheet

	components : "V,S,M", //Optional; Components as they will show up on the Spell Sheet; Use "M\u0192" for a material component that is costly (Mƒ), and use "M\u2020" for a material component that is costly and also consumed (M†)

	compMaterial : "Two lodestones", //Optional; Material Component. This string will be put in the mouseover text (tooltip) of the component field

	duration : "Instantaneous", //Required; Spell Duration as it will show up on the Spell Sheet

	save : "Int", //Optional; The ability score that the spell's Saving Throw uses. This will be put in the save field

	description : "Repair a single broken object no larger than 1 cu ft; can't restore magic to broken magic item", //Required; Short Spell Description as it will show up on the Spell Sheet

	descriptionMetric : "Repair a single broken object no larger than 1 cu ft; can't restore magic to broken magic item", //Optional; Short Spell Description as it will show up on the Spell Sheet when it is set to use the metric system. If this is omitted the sheet will automatically try to convert the 'description' to metric

	descriptionFull : "This spell repairs a single break or tear in an object you touch, such as broken chain link, two halves of a broken key, a torn clack, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage." + "\n   " + "This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object.", //Optional; The full Spell Description. This string will be put in the mouseover text (tooltip) of the description field

	ritual : false, //Optional; Whether (true) or not (false) this spell is a ritual

	psionic : true, //Optional; If you set this to true, the sheet will treat this spell as a psionic talent/discipline

	firstCol : "6", //Optional; Set something to be put in the first column on the spell sheet. This can be something like power point cost or ki cost, but also the commands "atwill", "oncelr", "oncesr", "markedbox", "checkbox", or "checkedbox" for the appropriate icon

	dependencies : [], //Optional; An array of spells (SpellsList object names) that will be put in the rows below this spell when this spell is added to the spell sheet
};