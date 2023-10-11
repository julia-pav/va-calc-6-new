import Sidebar from '../components/Sidebar'

export default function Layout({ children }: React.PropsWithChildren<{}>) {
	return (
		<div>
			<Sidebar />
			{children}
		</div>
	)
}
