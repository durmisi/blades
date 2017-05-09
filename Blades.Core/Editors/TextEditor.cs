using System.Security.Authentication.ExtendedProtection;

namespace Blades.Core.Editors
{
    public class TextEditor : PropertyEditor
    {
        public override string Name => "TextEditor";

        public TextEditor()
        {
            AddOption("Label");
        }
    }
}