import create from 'zustand';

interface UserState {
    user: {
        id: string | null;
        name: string | null;
        avatar: string | null;
    };
    setUser: (userData: { id: string; name: string; avatar: string }) => void;
    clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    user: {
        id: null,
        name: null,
        avatar: null,
    },
    setUser: (userData) =>
        set({
            user: {
                id: userData.id,
                name: userData.name,
                avatar: userData.avatar,
            },
        }),
    clearUser: () =>
        set({
            user: {
                id: null,
                name: null,
                avatar: null,
            },
        }),
}));
