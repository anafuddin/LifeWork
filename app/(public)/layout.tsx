const PublicLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="bg-[#1F1F1F]">
            {children}
        </div>
     );
}
 
export default PublicLayout;