using System;
using System.Collections.Generic;

namespace Blades.Core
{
    public class Blade
    {
        private readonly List<PropertyDescriptor> _properties;

        public Blade(string name, string title)
        {
            if (string.IsNullOrEmpty(name))
                throw new ArgumentNullException(nameof(name));

            if (string.IsNullOrEmpty(title))
                throw new ArgumentNullException(nameof(title));

            Title = title;
            Name = name;
            Size = BladeSize.Small;
            _properties = new List<PropertyDescriptor>();
        }

        public BladeSize Size { get; set; }

        public Blade Parent { get; set; }

        public List<PropertyDescriptor> Properties => _properties;

        public void AddProperty(PropertyDescriptor propertyDescriptor)
        {
            if (propertyDescriptor == null)
                throw new ArgumentNullException(nameof(propertyDescriptor));

            _properties.Add(propertyDescriptor);
        }

        public void RemoveProperty(PropertyDescriptor propertyDescriptor)
        {
            if (propertyDescriptor == null)
                throw new ArgumentNullException(nameof(propertyDescriptor));

            _properties.Remove(propertyDescriptor);
        }

        public string Name { get; }

        public string Title { get; }
    }
}
