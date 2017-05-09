    using System;
using System.Collections.Generic;

namespace Blades.Core
{
    public abstract class PropertyDescriptor
    {
        public string Name { get; set; }

        public string Title { get; set; }

        public PropertyEditor Editor { get; set; }

        public PropertyEditor BladeEditor { get; set; }

        public ModelDescriptor ModelDescriptor { get; set; }

    }

    public class PropertyDescriptor<T> : PropertyDescriptor
    {

        public T Value { get; set; }

        public List<PropertyValidator> Validators { get; set; }

        public void AddValidator(PropertyValidator validator)
        {
            if (validator == null)
                throw new ArgumentNullException(nameof(validator));

            Validators.Add(validator);
        }
    }
}
