namespace Blades.Core.Editors
{
    public class DateEditor : PropertyEditor
    {
        public override string Name => "DateEditor";

        public DateEditor()
        {
            AddOption("Label");
        }
    }
}