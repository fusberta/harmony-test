import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchInput: React.FC = () => {
    return (
        <form>
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-10 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
            </div>
        </form>
    );
};

export default SearchInput;