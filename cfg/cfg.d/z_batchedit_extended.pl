# Change for Batch Edit
$c->{plugins}{"Export::BatchEdit"}{params}{disable} = 0;
$c->{plugins}{"Screen::BatchEdit"}{params}{disable} = 0;

$c->{plugin_alias_map}->{"Export::BatchEdit"} = "Export::ZoraBatchEdit";
$c->{plugin_alias_map}->{"Export::ZoraBatchEdit"} = undef;
# END Change for Batch Edit

