namespace Blades.Core.Editors
{
    public class DropDownEditor : PropertyEditor
    {
        public override string Name => "DropDownEditor";

        public DropDownEditor()
        {
            AddOption("Label");
            AddOption("APILocation");
            AddOption("ID");
            AddOption("Value");
        }

    }
}