namespace Blades.Core.Editors
{
    public class PasswordEditor : PropertyEditor
    {
        public override string Name => "PasswordEditor";

        public PasswordEditor()
        {
            AddOption("Label");
        }
    }
}