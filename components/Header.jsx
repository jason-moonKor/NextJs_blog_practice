import {Row, Col} from "antd";
import Link from "next/link";
import {CodeOutlined} from "@ant-design/icons";

export default function Header() {
	return (
		<Row
			align="middle"
			style={{
				height: 64
			}}
		>
			<Col>
				<Link href="/">
					<a>
						<div
							style={{
								fontSize: 20,
								fontWeight: "bold"
							}}
						>
							<CodeOutlined /> Jason Blog
						</div>
					</a>
				</Link>
			</Col>
		</Row>
	);
}
