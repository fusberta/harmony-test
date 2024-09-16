import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchInput: React.FC = () => {
    return (
        <form className='max-sm:hidden'>
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-10 lg:w-[300px] rounded-xl border-zinc-700"
                />
            </div>
        </form>
    );
};

export default SearchInput;