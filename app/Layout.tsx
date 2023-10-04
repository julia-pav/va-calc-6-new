export default function Layout({ children }: React.PropsWithChildren<{}>) {
	return (
		<div>
			<div>Here is available some layout</div>
			{children}
		</div>
	)
}
