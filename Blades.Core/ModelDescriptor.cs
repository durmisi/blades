using System;
using System.Collections.Generic;

namespace Blades.Core
{
    public class ModelDescriptor
    {
        public string Name { get; }
        public string Version { get; }
        public string ApiLocation { get; set; }

        private readonly List<PropertyDescriptor> _properties;

        public ModelDescriptor(string name, string version)
        {
            if (string.IsNullOrEmpty(name))
                throw new ArgumentNullException(nameof(name));

            Name = name;
            Version = version;
            _properties = new List<PropertyDescriptor>();
        }

        public IEnumerable<PropertyDescriptor> PropertyDescriptors => _properties;

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

    }
}