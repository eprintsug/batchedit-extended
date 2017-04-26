# Change for Batch Edit
$c->{plugins}{"Export::ZoraBatchEdit"}{params}{disable} = 0;
$c->{plugins}{"Screen::ZoraBatchEdit"}{params}{disable} = 0;

$c->{plugin_alias_map}->{"Export::BatchEdit"} = "Export::ZoraBatchEdit";
$c->{plugin_alias_map}->{"Export::ZoraBatchEdit"} = undef;
# END Change for Batch Edit

