using System;

namespace Blades.Core
{
    public abstract class PropertyValidator
    {
        public abstract string Name { get; }

        public virtual bool IsValid(object obj)
        {
            throw new NotImplementedException();
        }
    }
}