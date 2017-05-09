using System;
using System.Collections.Generic;

namespace Blades.Core
{
    public abstract class PropertyEditor
    {
        public abstract string Name { get; }

        public List<string> Options { get; }

        protected PropertyEditor()
        {
            Options = new List<string>();
        }

        public void AddOption(string key)
        {
            if (key == null) throw new ArgumentNullException(nameof(key));
            Options.Add(key);
        }

        public void RemoveOption(string key)
        {
            if (key == null) throw new ArgumentNullException(nameof(key));
            Options.Remove(key);
        }
    }
}